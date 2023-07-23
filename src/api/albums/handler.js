const autoBind = require('auto-bind');

class AlbumHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    autoBind(this);
  }

  async postAlbumHandler(request, h) {
    this._validator.validateAlbumPayLoad(request.payload);

    const { name, year } = request.payload;

    const albumId = await this._service.addAlbum({ name, year });

    const response = h.response({
      status: 'success',
      message: 'Berhasil menambahkan album',
      data: {
        albumId,
      },
    });

    response.code(201);

    return response;
  }

  async getAlbumByIdHandler() {
    //
  }

  async putAlbumByIdHandler() {
    //
  }

  async deleteAlbumByIdHandler() {
    //
  }
}

module.exports = AlbumHandler;
