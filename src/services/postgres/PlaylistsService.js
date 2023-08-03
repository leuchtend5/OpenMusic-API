const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');

class PlaylistsService {
  constructor() {
    this._pool = new Pool();
  }

  async addPlaylist(name, owner) {
    const id = `playlist-${nanoid(16)}`;

    const query = {
      text: 'INSERT INTO playlists VALUES ($1, $2, $3) RETURNING id',
      values: [id, name, owner],
    };

    const result = await this._pool.query(query);

    if (!result.rows[0].id) {
      throw new InvariantError('Playlist gagal ditambahkan');
    }

    return result.rows[0].id;
  }

  async getPlaylists() {
    const query = {
      text: 'SELECT * FROM playlists',
    };

    const result = await this._pool.query(query);

    return result.rows;
  }

  async getPlaylistById() {
    //
  }

  async deletePlaylistById() {
    //
  }

  async addSongToPlaylist() {
    //
  }

  async getSongsFromPlaylist() {
    //
  }

  async deleteSongFromPlaylist() {
    //
  }

  async verifyPlaylistOwner() {
    //
  }

  async verifyPlaylistAccess() {
    //
  }
}

module.exports = PlaylistsService;
