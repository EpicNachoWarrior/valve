const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { playlist, userId } = JSON.parse(event.body);
  const filePath = path.resolve(__dirname, `playlists/${userId}.json`);

  try {
    fs.writeFileSync(filePath, JSON.stringify(playlist));
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Playlist saved successfully!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to save playlist.' }),
    };
  }
};
