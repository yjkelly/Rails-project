# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161129222406) do

  create_table "accommodations", force: :cascade do |t|
    t.string   "name",        limit: 100,                  null: false
    t.text     "description", limit: 65535
    t.string   "picture",     limit: 250
    t.string   "type",        limit: 25
    t.decimal  "price",                     precision: 10
    t.datetime "created_at",                               null: false
    t.datetime "updated_at",                               null: false
  end

  add_index "accommodations", ["name"], name: "index_accommodations_on_name", using: :btree

  create_table "activities", force: :cascade do |t|
    t.integer  "activity_category_id", limit: 4
    t.string   "name",                 limit: 100,                  null: false
    t.text     "description",          limit: 65535
    t.string   "picture",              limit: 250
    t.decimal  "price",                              precision: 10
    t.datetime "created_at",                                        null: false
    t.datetime "updated_at",                                        null: false
  end

  add_index "activities", ["name"], name: "index_activities_on_name", using: :btree

  create_table "activity_categories", force: :cascade do |t|
    t.string   "name",        limit: 25,    null: false
    t.text     "description", limit: 65535
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  add_index "activity_categories", ["name"], name: "index_activity_categories_on_name", using: :btree

  create_table "basket_items", force: :cascade do |t|
    t.integer  "product_id", limit: 4
    t.integer  "order_id",   limit: 4
    t.integer  "quantity",   limit: 2
    t.string   "status",     limit: 50
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
  end

  create_table "booking_activities", force: :cascade do |t|
    t.integer  "booking_id",    limit: 4
    t.integer  "activity_id",   limit: 4
    t.string   "status",        limit: 50
    t.integer  "number_guests", limit: 2
    t.date     "start_date"
    t.date     "end_date"
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "bookings", force: :cascade do |t|
    t.integer  "accommodation_id", limit: 4
    t.integer  "destination_id",   limit: 4
    t.integer  "order_id",         limit: 4
    t.string   "status",           limit: 50
    t.decimal  "price",                       precision: 10
    t.integer  "number_guests",    limit: 2
    t.date     "start_date"
    t.date     "end_date"
    t.datetime "created_at",                                 null: false
    t.datetime "updated_at",                                 null: false
  end

  create_table "destinations", force: :cascade do |t|
    t.integer  "accommodation_id", limit: 4
    t.integer  "activity_id",      limit: 4
    t.string   "name",             limit: 50,    null: false
    t.text     "description",      limit: 65535
    t.string   "picture",          limit: 250
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
  end

  add_index "destinations", ["name"], name: "index_destinations_on_name", using: :btree

  create_table "orders", force: :cascade do |t|
    t.integer  "user_id",    limit: 4
    t.string   "status",     limit: 50
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
  end

  create_table "product_categories", force: :cascade do |t|
    t.string   "name",        limit: 25,    null: false
    t.text     "description", limit: 65535
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  add_index "product_categories", ["name"], name: "index_product_categories_on_name", using: :btree

  create_table "products", force: :cascade do |t|
    t.integer  "product_category_id", limit: 4
    t.string   "name",                limit: 100,                  null: false
    t.text     "description",         limit: 65535
    t.string   "picture",             limit: 250
    t.decimal  "price",                             precision: 10
    t.datetime "created_at",                                       null: false
    t.datetime "updated_at",                                       null: false
  end

  add_index "products", ["name"], name: "index_products_on_name", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        limit: 25,                  null: false
    t.string   "firstname",       limit: 50
    t.string   "surname",         limit: 50
    t.string   "email",           limit: 50,                  null: false
    t.string   "hashed_password", limit: 50
    t.string   "avatar",          limit: 250
    t.string   "country",         limit: 50
    t.boolean  "is_admin",                    default: false, null: false
    t.datetime "created_at",                                  null: false
    t.datetime "updated_at",                                  null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
