const autoBind = require('auto-bind');

class SongHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    autoBind(this);
  }

  async postSongHandler(request, h) {
    this._validator.validateSongPayLoad(request.payload);

    const { title, year, genre, performer, duration, albumId } = request.payload;

    const songId = await this._service.addSong({
      title,
      year,
      genre,
      performer,
      duration,
      albumId,
    });

    const response = h.response({
      status: 'success',
      message: 'Berhasil menambahkan lagu',
      data: {
        songId,
      },
    });

    response.code(201);

    return response;
  }
}

module.exports = SongHandler;
