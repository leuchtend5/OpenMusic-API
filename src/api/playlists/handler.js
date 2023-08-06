const autoBind = require('auto-bind');

class PlaylistsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    autoBind(this);
  }

  async postPlaylistHandler(request, h) {
    this._validator.validatePlaylistPayload(request.payload);

    const { name } = request.payload;
    const { id: credentialId } = request.auth.credentials;

    const playlistId = await this._service.addPlaylist(name, credentialId);

    const response = h.response({
      status: 'success',
      message: 'Berhasil menambahkan playlist',
      data: {
        playlistId,
      },
    });

    response.code(201);

    return response;
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
