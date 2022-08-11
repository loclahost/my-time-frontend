import CalendarView from './components/CalendarView.vue'
import UsersView from './components/UsersView.vue'

export default {
    menu: [
        {
          header: 'My time',
          hiddenOnCollapse: true
        },
        {
          href: '/me',
          title: 'Me',
          icon: 'bi bi-person-fill'
        },
        {
          href: '/customers',
          title: 'Customers',
          icon: 'bi bi-grid-3x3-gap'
        },
        {
          header: 'Administration',
          hiddenOnCollapse: true
        },
        {
          href: '/users',
          title: 'Users',
          icon: 'bi bi-people-fill'
        }
      ],
      navigation: [
        {
          path: '/me',
          component: CalendarView
        },
        {
          path: '/customers',
          component: CalendarView
        },
        {
          path: '/users',
          component: UsersView
        }
      ]
}