export const state = () => ({
  locales: ['en', 'th'],
  locale: 'th'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
