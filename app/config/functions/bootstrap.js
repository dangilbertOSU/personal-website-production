"use strict";

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

module.exports = async () => {
  const authenticated = await strapi
    .query("role", "users-permissions")
    .findOne({ type: "public" });
  authenticated.permissions.forEach((permission) => {
    if (
      permission.type === "application" &&
      permission.controller === "article"
    ) {
      if (
        permission.action === "count" ||
        permission.action === "findone" ||
        permission.action === "find"
      ) {
        let newPermission = permission;
        newPermission.enabled = true;

        strapi
          .query("permission", "users-permissions")
          .update({ id: newPermission.id }, newPermission);
      }
    }
  });
  return;
};
