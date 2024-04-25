<script lang="ts">
  import * as Sheet from '@/components/ui/sheet'
  import { Button } from '@/components/ui/button'
  import { Menu } from 'lucide-svelte'
</script>

<Sheet.Root>
  <Sheet.Trigger asChild let:builder>
    <Button
      builders={[builder]}
      type="button"
      variant="ghost"
      class="h-fit w-fit p-0"
      aria-label="Abrir menú"
    >
      <Menu className="h-6 w-6" aria-hidden="true" />
    </Button>
  </Sheet.Trigger>
  <Sheet.Content side="right">
    <Sheet.Header>
      <Sheet.Title>Qultiva</Sheet.Title>
      <Sheet.Description>
        Make changes to your profile here. Click save when you're done.
      </Sheet.Description>
    </Sheet.Header>
    <div class="grid gap-4 py-4"></div>
  </Sheet.Content>
</Sheet.Root>
