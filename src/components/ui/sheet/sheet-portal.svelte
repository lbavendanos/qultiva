<script lang="ts">
  import { Dialog as SheetPrimitive } from 'bits-ui'
  import { cn } from '@/lib/utils/helpers'

  const {
    class: className,
    children,
    ...restProps
  }: SheetPrimitive.PortalProps = $props()
</script>

<SheetPrimitive.Portal class={cn(className)} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</SheetPrimitive.Portal>
