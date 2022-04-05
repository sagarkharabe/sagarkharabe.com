export const pages = {
  home: '',
  blog: 'Blog',
  about: 'About',
  portfolio: 'Portfolio',
  contact: 'Contact',
}

export const getLinkEditPost = absolutePath => {
  const res = /([^/]+)$/g.exec(absolutePath)
  if (res.length >= 1) {
    return `https://github.com/sagarkharabe/sagarkharabe.com/blob/master/content/blog/${
      res[res.length - 1]
    }`
  }
  return ''
}

export const preferSpacedTag = tags => {
  for (const tag of tags) {
    if (!tag.includes(` `)) {
      return tag
    }
  }
  return tags[0]
}
