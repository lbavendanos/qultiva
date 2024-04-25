<script lang="ts">
  import { Button as ButtonPrimitive } from 'bits-ui'
  import { type Props, buttonVariants } from './index.js'
  import { cn } from '@/lib/utils/helpers.js'

  const {
    variant = 'default',
    size = 'default',
    builders = [],
    class: className,
    children,
    ...restProps
  }: Props = $props()
</script>

<ButtonPrimitive.Root
  {builders}
  class={cn(buttonVariants({ variant, size, className }))}
  type="button"
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</ButtonPrimitive.Root>
