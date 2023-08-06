const autoBind = require('auto-bind');

class PlaylistsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    autoBind(this);
  }

  async postPlaylistHandler() {
    //
  }

  async getPlaylistsHandler() {
    //
  }

  async deletePlaylistByIdHandler() {
    //
  }

  async postSongToPlaylistHandler() {
    //
  }

  async getSongsFromPlaylistHandler() {
    //
  }

  async deleteSongFromPlaylistHandler() {
    //
  }
}

module.exports = PlaylistsHandler;
