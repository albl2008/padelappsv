import Joi from 'joi';
import { objectId } from '../validate/custom.validation';
import { NewCreatedShift } from './shifts.interfaces';

const createShiftBody: Record<keyof NewCreatedShift, any> = {
  duration: Joi.number().required().valid(1,1.5, 2,2.5,3),
  date: Joi.date().required(),
  start: Joi.date().required(),
  end: Joi.date().required(),
  tolerance: Joi.number().required(),
  status: Joi.object().keys({
    id:Joi.number().required(),
    sta:Joi.string().required()
  }).required()
};

export const createShift = {
  body: Joi.object().keys(createShiftBody),
};

export const getShiftsMonth = {
  params: Joi.object().keys({
    month: Joi.date().required(),
  }),
}


export const createShiftsMonth = {
  params: Joi.object().keys({
    month: Joi.date().required(),
  }),
  body: Joi.object().keys({
    shiftDuration: Joi.number().required().valid(1,1.5, 2,2.5,3),
    shiftsPerDay: Joi.number().required(),
    tolerance: Joi.number().required(),
    firstShift: Joi.date().required(),
  }
  ),
};


export const getShifts = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    projectBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

export const getShift = {
  params: Joi.object().keys({
    shiftId: Joi.string().custom(objectId),
  }),
};

export const updateShift = {
  params: Joi.object().keys({
    shiftId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      duration: Joi.number().valid(1,1.5, 2,2.5,3),
      date: Joi.date(),
      start: Joi.date(),
      end: Joi.date(),
      status: Joi.object().keys({
        id:Joi.number(),
        sta:Joi.string()
      }),
      court: Joi.string().custom(objectId),
      price: Joi.number(),
      client: Joi.string()
      })
    .min(1),
};

export const deleteShift = {
  params: Joi.object().keys({
    shiftId: Joi.string().custom(objectId),
  }),
};
