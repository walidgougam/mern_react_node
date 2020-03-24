import React, {Component, useState} from 'react';
import './CreateExercice.css';
import {Navbar} from './Navbar';

export const EditExercice = () => {
  const [username, setUsername] = useState();
  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();
  const [date, setDate] = useState();

  let handleForm = (value, type) => {
    switch (type) {
      case 'username':
        return setUsername(value);
      case 'description':
        return setDescription(value);
      case 'duration':
        return setDuration(value);
      case 'date':
        return setDate(value);
    }
  };
  return (
    <div>
      <Navbar />
      <h1>Edit Exercice Log</h1>
      <form className="form_create">
        <label>Username</label>
        <input
          type="text"
          placeholder="username"
          onChange={e => handleForm(e.target.value, 'username')}
          value={username}
        />
        <label>Description</label>
        <input
          type="text"
          placeholder="description"
          onChange={e => handleForm(e.target.value, 'description')}
          value={description}
        />
        <label>Duration (in minutes)</label>
        <input
          type="text"
          placeholder="duration"
          onChange={e => handleForm(e.target.value, 'duration')}
          value={duration}
        />
        <label>date</label>
        <input
          type="text"
          placeholder="date"
          onChange={e => handleForm(e.target.value, 'date')}
          value={date}
        />
      </form>
      <button>Edit exercice log</button>
    </div>
  );
};
