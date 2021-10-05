# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_04_213009) do

  create_table "bios", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "phone"
    t.string "email"
    t.string "linkedin"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_bios_on_user_id"
  end

  create_table "educations", force: :cascade do |t|
    t.string "school"
    t.string "degree"
    t.datetime "start_date"
    t.datetime "end_date"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_educations_on_user_id"
  end

  create_table "introductions", force: :cascade do |t|
    t.string "summary"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_introductions_on_user_id"
  end

  create_table "skills", force: :cascade do |t|
    t.string "expertise"
    t.string "rating"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_skills_on_user_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.string "details"
    t.integer "work_history_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["work_history_id"], name: "index_tasks_on_work_history_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "work_histories", force: :cascade do |t|
    t.string "title"
    t.string "company"
    t.datetime "start_date"
    t.datetime "end_date"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_work_histories_on_user_id"
  end

  add_foreign_key "bios", "users"
  add_foreign_key "educations", "users"
  add_foreign_key "introductions", "users"
  add_foreign_key "skills", "users"
  add_foreign_key "tasks", "work_histories"
  add_foreign_key "work_histories", "users"
end
