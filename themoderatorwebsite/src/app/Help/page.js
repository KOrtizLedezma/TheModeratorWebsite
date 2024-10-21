"use client";
import Link from 'next/link';
import { FaRegCopy } from 'react-icons/fa';
import { useState } from 'react';

export default function Help() {

  const copyToClipboard = (command) => {
    navigator.clipboard.writeText(command);
  };


  return (
    <div>
      <header className="header">
        <nav className="nav-bar">
          <div className="logo">The Moderator</div>
          <ul className="nav-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Help">Help</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="content">
        <h1 className='help-title'>
          Commands
        </h1>

        <table className="commands-table">
          <thead>
            <tr>
              <th>Command</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>!help</code></td>
              <td>Displays all the commands.</td>
              <td>
                <button onClick={() => copyToClipboard('!help')}>
                  <FaRegCopy size={20} />
                </button>
              </td>
            </tr>
            <tr>
              <td><code>!join</code></td>
              <td>Joins you in the roll fight if there is one happening.</td>
              <td>
                <button onClick={() => copyToClipboard('!join')}>
                  <FaRegCopy size={20} />
                </button>
              </td>
            </tr>
            <tr>
              <td><code>!ping</code></td>
              <td>Replies with `&quot;`Pong!`&quot;` to check if the bot is responsive.</td>
              <td>
                <button onClick={() => copyToClipboard('!ping')}>
                  <FaRegCopy size={20} />
                </button>
              </td>
            </tr>
            <tr>
              <td><code>!roll</code></td>
              <td>Returns a random number in the 1-100 range.</td>
              <td>
                <button onClick={() => copyToClipboard('!roll')}>
                  <FaRegCopy size={20} />
                </button>
              </td>
            </tr>
            <tr>
              <td><code>!rollfight</code></td>
              <td>Starts a roll fight for people who want to join by typing !join.</td>
              <td>
                <button onClick={() => copyToClipboard('!rollfight')}>
                  <FaRegCopy size={20} />
                </button>
              </td>
            </tr>
            <tr>
              <td><code>!track [voiceChannel] [textChannel]</code></td>
              <td>Tracks a specified voice channel and sends a notification to a text channel when someone joins.</td>
              <td>
                <button onClick={() => copyToClipboard('!track [voiceChannel] [textChannel]')}>
                  <FaRegCopy size={20} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
