<template>
  <div class="container">
    <div class="card-grid">
      <div class="card-item" v-for="item in cards" :key="item.id">
        <CardComp
          :title="item.title"
          :description="item.descr"
          :level="item.lvl"
        >
        </CardComp>
      </div>
    </div>
  </div>
</template>

<script>
import CardComp from '@/components/UI/CardComp'

export default {
  components: {
    CardComp
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'The Archer',
          descr:
            'The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape, a leather belt, and an attached small pouch. She has a quiver slung on her back, a gold short bow in her left hand, and a golden band on each of her upper arms.',
          lvl: 4
        },
        {
          id: 2,
          title: 'The Wizard',
          descr:
            'The Wizard is a ranged troop unlocked in the level 7 Barracks. He shoots fireballs or energy blasts that do high damage but requires support as he has relatively low hit points and can easily be killed by point defenses.',
          lvl: 5
        },
        {
          id: 3,
          title: 'The Barbarian',
          descr:
            'The Barbarian is a single-target melee troop. He is the first troop unlocked in the Barracks. He appears as a male kilt-clad warrior with an angry, battle-ready expression, hungry for destruction. He has close-cropped blond hair and a long, yellow horseshoe mustache.',
          lvl: 4
        }
      ]
    }
  }
}
</script>
