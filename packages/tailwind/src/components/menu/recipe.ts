import { tv } from 'tailwind-variants'

export const menuStyles = tv({
  base: 'menu',
  defaultVariants: {
    size: 'md',
  },
  slots: {
    contextTrigger: 'menu__contextTrigger',
    trigger: 'menu__trigger',
    triggerItem: 'menu__triggerItem',
    positioner: 'menu__positioner',
    arrow: 'menu__arrow',
    arrowTip: 'menu__arrowTip',
    content: 'menu__content',
    separator: 'menu__separator',
    item: 'menu__item',
    optionItem: 'menu__optionItem',
    itemGroupLabel: 'menu__itemGroupLabel',
    itemGroup: 'menu__itemGroup',
  },
  variants: {
    size: {
      xs: {
        contextTrigger: 'menu__contextTrigger--size_xs',
        trigger: 'menu__trigger--size_xs',
        triggerItem: 'menu__triggerItem--size_xs',
        positioner: 'menu__positioner--size_xs',
        arrow: 'menu__arrow--size_xs',
        arrowTip: 'menu__arrowTip--size_xs',
        content: 'menu__content--size_xs',
        separator: 'menu__separator--size_xs',
        item: 'menu__item--size_xs',
        optionItem: 'menu__optionItem--size_xs',
        itemGroupLabel: 'menu__itemGroupLabel--size_xs',
        itemGroup: 'menu__itemGroup--size_xs',
      },
      sm: {
        contextTrigger: 'menu__contextTrigger--size_sm',
        trigger: 'menu__trigger--size_sm',
        triggerItem: 'menu__triggerItem--size_sm',
        positioner: 'menu__positioner--size_sm',
        arrow: 'menu__arrow--size_sm',
        arrowTip: 'menu__arrowTip--size_sm',
        content: 'menu__content--size_sm',
        separator: 'menu__separator--size_sm',
        item: 'menu__item--size_sm',
        optionItem: 'menu__optionItem--size_sm',
        itemGroupLabel: 'menu__itemGroupLabel--size_sm',
        itemGroup: 'menu__itemGroup--size_sm',
      },
      md: {
        contextTrigger: 'menu__contextTrigger--size_md',
        trigger: 'menu__trigger--size_md',
        triggerItem: 'menu__triggerItem--size_md',
        positioner: 'menu__positioner--size_md',
        arrow: 'menu__arrow--size_md',
        arrowTip: 'menu__arrowTip--size_md',
        content: 'menu__content--size_md',
        separator: 'menu__separator--size_md',
        item: 'menu__item--size_md',
        optionItem: 'menu__optionItem--size_md',
        itemGroupLabel: 'menu__itemGroupLabel--size_md',
        itemGroup: 'menu__itemGroup--size_md',
      },
      lg: {
        contextTrigger: 'menu__contextTrigger--size_lg',
        trigger: 'menu__trigger--size_lg',
        triggerItem: 'menu__triggerItem--size_lg',
        positioner: 'menu__positioner--size_lg',
        arrow: 'menu__arrow--size_lg',
        arrowTip: 'menu__arrowTip--size_lg',
        content: 'menu__content--size_lg',
        separator: 'menu__separator--size_lg',
        item: 'menu__item--size_lg',
        optionItem: 'menu__optionItem--size_lg',
        itemGroupLabel: 'menu__itemGroupLabel--size_lg',
        itemGroup: 'menu__itemGroup--size_lg',
      },
    },
  },
})