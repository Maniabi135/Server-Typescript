import { json } from 'body-parser';
import { Router } from 'express';
import { User } from '../models/user-model';

export const api = Router();

api.get('/', (req, res, next) => {
    console.log('getting elements');
    User.findAll().then((data) => {
        console.log(res.json(data));
        return res.json(data);
    }).catch((err) => {
        console.log(err);
        return err;
    });
});

api.get('/:id', async (req, res, next) => {
    try {
      const loc = await User.find({
        where: {
          id: req.params['id']
          }
      });
      res.json(loc);
    } catch (e) {
      next(e);
    }
});

api.post('/', async (req, res, next) => {
    console.log(req.body);
    try {
        const fb = await User.create(req.body);
        res.status(201).json(fb);
    } catch (e) {
        next(e);
    }
});

api.post('/:id', async (req, res, next) => {
    console.log(req.params['id']);
    try {
        await User.destroy({
          where: {
            id: req.params['id']
            }
        });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

api.put('/:id', async (req, res, next) => {
    console.log(req.params['id']);
    try {
        await User.update<User>(req.body, {
          where: {
            id: req.params['id']
            }
        });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
})