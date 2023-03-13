

export default {

    name:'daybook',
    component: () => import(/* webpackChunkName: "DayBook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        
    ]

}