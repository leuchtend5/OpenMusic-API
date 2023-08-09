const mapSongDBToModel = ({ id, title, performer }) => ({
  id,
  title,
  performer,
});

const mapPlaylistDBToModel = ({ id, name, username }) => ({ id, name, username });

const mapPlaylistActivityDBToModel = ({ username, title, action, time }) => ({
  username,
  title,
  action,
  time,
});

module.exports = { mapSongDBToModel, mapPlaylistDBToModel, mapPlaylistActivityDBToModel };
