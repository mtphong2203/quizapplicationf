import { InjectionToken } from "@angular/core";
import { IUserService } from "../modules/services/user/user.interface";
import { IRoleService } from "../modules/services/role/role.interface";
import { IQuestionService } from "../modules/services/question/question.interface";
import { IAuthService } from "../modules/services/auth/auth.interface";
import { IPermissionService } from "../modules/services/permissions/permission.interface";

export const USER_SERVICE = new InjectionToken<IUserService>('USER_SERVICE');
export const ROLE_SERVICE = new InjectionToken<IRoleService>('ROLE_SERVICE');
export const QUESTION_SERVICE = new InjectionToken<IQuestionService>('QUESTION_SERVICE');
export const QUIZ_SERVICE = new InjectionToken<IQuestionService>('QUIZ_SERVICE');
export const AUTH_SERVICE = new InjectionToken<IAuthService>('AUTH_SERVICE');
export const PERMISSION_SERVICE = new InjectionToken<IPermissionService>('PERMISSION_SERVICE');