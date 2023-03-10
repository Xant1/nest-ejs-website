import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../user/user.model';
import { UserRole } from './user-role.model';
import { Role } from './role.model';

@Module({
  controllers: [RoleController],
  providers: [RoleService],
  imports: [SequelizeModule.forFeature([Role, User, UserRole])],
  exports: [RoleService],
})
export class RoleModule {}
