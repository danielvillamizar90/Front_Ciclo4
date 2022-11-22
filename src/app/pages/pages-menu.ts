import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Visualizar Reportes',
    icon: 'archive-outline',
    link: '/pages/reportes',
    children: [
      {
        title: 'Listado de votos por candidato',
        link: '/pages/votaciones/listar',
      },
      {
        title: 'Mesas con mayor participación',
        link: '/pages/reportes/mesas',
      },
      {
        title: 'Listar votos por partido',
        link: '/pages/reportes/partidos',
      },
      {
        title: 'Distribucion porcentual partidos',
        link: '/pages/reportes/partidos/porcentual',
      },
    ],
  },
  {
    title: 'Votaciones',
    icon: 'inbox-outline',
    children: [
      {
        title: 'Registrar votos',
        link: '/pages/votos/registrar',
      },
      {
        title: 'Listar votos',
        link: '/pages/votos/listar',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/pages/seguridad/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title: 'Administradores',
    group: true,
  },
  {
    title: 'Usuarios',
    icon: 'person-outline',
    children: [
      {
        title: 'Crear Usuario',
        link: '/pages/usuarios/crear',
      },
      {
        title: 'Listar/Editar Usuarios',
        link: '/pages/usuarios/listar',
      },
      {
        title: 'Crear Rol',
        link: '/pages/rol/crear',
      },
      {
        title: 'Listar/Editar Roles',
        link: '/pages/rol/listar',
      },
      {
        title: 'Crear Permiso',
        link: '/pages/permiso/crear',
      },
      {
        title: 'Listar/Editar Permisos',
        link: '/pages/permiso/listar',
      },
      {
        title: 'Asignar Permiso a Rol',
        link: '/pages/permiso-rol/crear',
      },
      {
        title: 'Listar/Editar Asignación',
        link: '/pages/permiso-rol/listar',
      },
    ],
  },
  {
    title: 'Mesas',
    icon: 'grid-outline',
    children: [
      {
        title: 'Crear Mesa',
        link: '/pages/mesas/crear',
      },
      {
        title: 'Listar/Editar Mesas',
        link: '/pages/mesas/listar',
      },
    ],
  },
  {
    title: 'Candidatos',
    icon: 'people-outline',
    children: [
      {
        title: 'Crear Candidato',
        link: '/pages/candidatos/crear',
      },
      {
        title: 'Listar/Editar Candidatos',
        link: '/pages/candidatos/listar',
      },
    ],
  },
  {
    title: 'Partidos',
    icon: 'person-done-outline',
    children: [
      {
        title: 'Crear Partido',
        link: '/pages/partidos/crear',
      },
      {
        title: 'Listar/Editar Candidatos',
        link: '/pages/partidos/listar',
      },
    ],
  },
];
