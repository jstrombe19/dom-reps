class AddReferenceToOwners < ActiveRecord::Migration[6.0]
  def change
    add_reference :puppies, :owner, foreign_key: true
  end
end
