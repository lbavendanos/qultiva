<script lang="ts">
  import { Dialog as SheetPrimitive } from 'bits-ui'
  import { fade } from 'svelte/transition'
  import { cn } from '@/lib/utils/helpers'

  const {
    transition = fade,
    transitionConfig = { duration: 150 },
    class: className,
    ...restProps
  }: SheetPrimitive.OverlayProps = $props()
</script>

<SheetPrimitive.Overlay
  {transition}
  {transitionConfig}
  class={cn('fixed inset-0 z-50 bg-background/80 backdrop-blur-sm ', className)}
  {...restProps}
/>
