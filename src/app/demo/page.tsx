// src/app/demo/page.tsx
'use client';

import { useState } from 'react';

export default function DemoPage() {
  const [form, setForm] = useState({
    alias: '',
    field: '',
    prestige: '',
    department: [],
    subtopics: '',
    workType: [],
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'department') {
      setForm((prev) => ({
        ...prev,
        department: checked
          ? [...prev.department, value]
          : prev.department.filter((d) => d !== value),
      }));
    } else if (type === 'checkbox' && name === 'workType') {
      setForm((prev) => ({
        ...prev,
        workType: checked
          ? [...prev.workType, value]
          : prev.workType.filter((w) => w !== value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
    alert('Demo preferences submitted!');
  };

  return (
	  <div className="min-h-screen bg-white text-black p-6">
      <h1 className="text-2xl font-bold mb-4">Try the Demo</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="alias"
          value={form.alias}
          onChange={handleChange}
          placeholder="Choose an alias (e.g. Batman)"
          className="w-full p-2 border rounded"
        />

        <select name="field" value={form.field} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select Field of Study</option>
          <option value="astrophysics">Astrophysics</option>
          <option value="machine_learning">Machine Learning</option>
          <option value="quantum_physics">Quantum Physics</option>
          <option value="biology">Biology</option>
          <option value="mathematics">Mathematics</option>
        </select>

        <select name="prestige" value={form.prestige} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select Prestige Range</option>
          <option value="top_100">Top 100</option>
          <option value="100_250">100–250</option>
          <option value="250_500">250–500</option>
          <option value="500_1000">500–1000</option>
          <option value="rest">Rest</option>
        </select>

        <div>
          <label className="block mb-1 font-medium">Departments:</label>
          {['Physics', 'Astronomy', 'Computer Science', 'Engineering'].map((dept) => (
            <label key={dept} className="block">
              <input
                type="checkbox"
                name="department"
                value={dept}
                checked={form.department.includes(dept)}
                onChange={handleChange}
              />{' '}
              {dept}
            </label>
          ))}
        </div>

        <input
          type="text"
          name="subtopics"
          value={form.subtopics}
          onChange={handleChange}
          placeholder="Subtopics (e.g. RR Lyrae, Cepheids)"
          className="w-full p-2 border rounded"
        />

        <div>
          <label className="block mb-1 font-medium">Type of Work:</label>
          {['Theoretical', 'Experimental', 'Computational'].map((type) => (
            <label key={type} className="block">
              <input
                type="checkbox"
                name="workType"
                value={type}
                checked={form.workType.includes(type)}
                onChange={handleChange}
              />{' '}
              {type}
            </label>
          ))}
        </div>

        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
}

