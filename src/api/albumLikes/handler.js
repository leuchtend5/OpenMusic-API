const autoBind = require('auto-bind');
const InvariantError = require('../../exceptions/InvariantError');

class AlbumLikesHandler {
  constructor(service, albumsService) {
    this._service = service;
    this._albumsService = albumsService;

    autoBind(this);
  }

  async postLikeHandler(request, h) {
    const { id: albumId } = request.params;
    const { id: credentialId } = request.auth.credentials;

    await this._albumsService.getAlbumById(albumId);

    const checkLike = await this._service.checkAlreadyLike(credentialId, albumId);

    if (!checkLike) {
      const likeId = await this._service.addLike(credentialId, albumId);

      const response = h.response({
        status: 'success',
        message: 'berhasil menyukai album',
        id: `${likeId}`,
      });

      response.code(201);

      return response;
    }

    throw new InvariantError('Album sudah pernah disukai');
  }

  async getLikeHandler(request, h) {
    const { id: albumId } = request.params;

    const result = await this._service.getTotalLikes(albumId);

    const response = h.response({
      status: 'success',
      data: {
        likes: result.total,
      },
    });

    response.header('X-Data-Source', result.source);
    response.code(200);

    return response;
  }

  async deleteLikeHandler(request, h) {
    const { id: albumId } = request.params;
    const { id: credentialId } = request.auth.credentials;

    await this._service.deleteLike(credentialId, albumId);

    const response = h.response({
      status: 'success',
      message: 'Berhasil unlike album',
    });

    response.code(200);

    return response;
  }
}

module.exports = AlbumLikesHandler;
