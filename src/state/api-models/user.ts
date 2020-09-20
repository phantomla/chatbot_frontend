import {
    CommonResponse,
    SearchRequest,
} from './common';
import { User } from '../models/user';

export type UserRequest = (SearchRequest & {}) | undefined;
export type UserResponse = CommonResponse & {
    data?: {
        user: User;
    };
};