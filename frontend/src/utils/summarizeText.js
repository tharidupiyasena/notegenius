// Install these first: npm install @tensorflow/tfjs @tensorflow-models/universal-sentence-encoder
import * as tf from '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder';

let model;

export const summarizeText = async (text) => {
  if (!model) {
    model = await use.load();
  }

  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  if (sentences.length <= 2) return text;

  const embeddings = await model.embed(sentences);
  const similarity = tf.matMul(embeddings, embeddings, false, true);
  const scores = similarity.mean(1);
  const scoresArray = await scores.array();

  const topIndices = scoresArray
    .map((score, idx) => [score, idx])
    .sort((a, b) => b[0] - a[0])
    .slice(0, Math.ceil(sentences.length * 0.3))
    .map(([, idx]) => idx)
    .sort((a, b) => a - b);

  return topIndices.map(i => sentences[i]).join(' ');
};
