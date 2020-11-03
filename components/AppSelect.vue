<template>
  <div>
    <label :for="select">What {{ select }} do you want? </label>
    <select :name="select" @change="$emit('change', $event.target.value)" :id="select" type="select">
      <option value>Please select {{ cuisine }}</option>
      <option
        :key="selectOption"
        :value="selectOption"
        v-for="selectOption in selectOptions"
      >
        {{ selectOption }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    select: {
      type: String,
      default: "cuisine",
    },
    selectOptions: {
      type: Array,
      default: () => ["tacos", "dim sum", "pizza"],
    },
  },
};
</script>

<style lang="scss" scoped>
</style>