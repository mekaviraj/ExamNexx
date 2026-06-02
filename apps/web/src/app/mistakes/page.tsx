import React from 'react';

type Mistake = {
  id: number;
  user_id: number;
  question_id: number;
  selected_answer: string;
  correct_answer: string;
  subject?: string;
  topic?: string;
  difficulty?: string;
  explanation?: string;
  timestamp: string;
};

async function fetchMistakes(userId = 1): Promise<Mistake[]> {
  const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
  const res = await fetch(`${base}/mistakes/user/${userId}`);
  if (!res.ok) return [];
  return res.json();
}

export default async function Page() {
  const mistakes = await fetchMistakes(1);

  return (
    <main className="min-h-screen px-6 py-8 text-slate-50">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-semibold">My Mistakes</h1>
        {mistakes.length === 0 ? (
          <p className="text-slate-400">No mistakes found for user #1.</p>
        ) : (
          <ul className="space-y-4">
            {mistakes.map((m) => (
              <li key={m.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">{m.subject} — {m.topic} — {m.difficulty}</p>
                    <p className="mt-2 text-base text-white">Question #{m.question_id}</p>
                  </div>
                  <div className="text-sm text-slate-400">{new Date(m.timestamp).toLocaleString()}</div>
                </div>
                <div className="mt-3 text-sm text-slate-300">
                  <p><strong>Selected:</strong> {m.selected_answer}</p>
                  <p className="mt-1"><strong>Correct:</strong> {m.correct_answer}</p>
                  {m.explanation && <p className="mt-2 text-slate-200">{m.explanation}</p>}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
