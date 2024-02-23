
export interface TriggerEventField {
    key: string,
    label: string,
    doctype: string,
    event: "after_insert" | "on_update" | "on_submit" | "on_cancel" | "on_trash" | "on_update_after_submit" | "on_change",
}

export const TriggerEvents: TriggerEventField[] = [
    {
        key: 'message_sent',
        label: 'Message Sent',
        doctype: 'Raven Message',
        event: 'after_insert',
    },
    {
        key: 'message_edited',
        label: 'Message Edited',
        doctype: 'Raven Message',
        event: 'on_update'
    },
    {
        key: 'message_deleted',
        label: 'Message Deleted',
        doctype: 'Raven Message',
        event: 'on_trash'
    },
    {
        key: 'emoji_reaction',
        label: 'Message Reaction',
        doctype: 'Raven Message Reaction',
        event: 'after_insert'
    },
    {
        key: 'channel_created',
        label: 'Channel Created',
        doctype: 'Raven Channel',
        event: 'after_insert'
    },
    {
        key: 'channel_deleted',
        label: 'Channel Deleted',
        doctype: 'Raven Channel',
        event: 'on_trash'
    },
    {
        key: 'channel_member_added',
        label: 'Channel Member Added',
        doctype: 'Raven Channel Member',
        event: 'after_insert'
    },
    {
        key: 'channel_member_deleted',
        label: 'Channel Member Deleted',
        doctype: 'Raven Channel Member',
        event: 'on_trash'
    },
    {
        key: 'raven_user_added',
        label: 'Raven User Added',
        doctype: 'Raven User',
        event: 'after_insert'
    },
    {
        key: 'raven_user_deleted',
        label: 'Raven User Deleted',
        doctype: 'Raven User',
        event: 'on_trash'
    }
]

export interface FieldsData {
    fieldname: string,
    label: string,
    fieldtype?: string,
    description?: string,
    example?: string,
}

const commonFields = [
    {
        fieldname: 'name',
        label: 'ID',
        fieldtype: 'Data',
        description: 'ID of the document'
    },
    {
        fieldname: 'creation',
        label: 'Creation Time',
        fieldtype: 'DateTime',
        description: `Time when the document was created in string format.`,
        example: '2021-08-12 12:00:00'
    },
    {
        fieldname: 'modified',
        label: 'Last Updated Time',
        fieldtype: 'DateTime',
        description: `Time when the document was last updated in string format.`,
        example: '2021-08-12 12:00:00'
    },
    {
        fieldname: 'modified_by',
        label: 'Last Updated By',
        fieldtype: 'Data',
        description: 'User ID of the person who last updated the document.',
        example: 'Administrator'
    },
    {
        fieldname: 'owner',
        label: 'Document Created By',
        fieldtype: 'Data',
        description: 'User ID of the person who created the document.',
        example: 'Administrator'
    },
]

export const DoctypeFieldList: {
    doctype: 'Raven Message' | 'Raven Channel' | 'Raven Channel Member' | 'Raven User' | 'Raven Message Reaction',
    events: string[]
    fields: FieldsData[]
}[] = [
        {
            doctype: 'Raven Message',
        events: ['Message Sent', 'Message Edited', 'Message Deleted'],
            fields: [
                {
                    fieldname: 'channel_id',
                    label: 'Channel ID',
                    fieldtype: 'Link',
                    description: 'ID of the channel where the message was sent.',
                    example: 'general'
                },
                {
                    fieldname: 'text',
                    label: 'Text',
                    fieldtype: 'Long Text',
                    description: 'Text of the message, in pure html format.',
                    example: '<p>Hello, World!</p>'
                },
                {
                    fieldname: 'json',
                    label: 'JSON',
                    fieldtype: 'JSON',
                    description: 'JSON data of the message.',
                    example: `{
                        content: [
                            {
                                content: [
                                    {
                                        text: "Hello, World!",
                                        type: "text"
                                    }
                                ],
                                type: "paragraph"
                            }
                        ],
                        type: "doc"
                    }`
                },
                {
                    fieldname: 'message_type',
                    label: 'Message Type',
                    fieldtype: 'Select',
                    description: 'Type of the message.',
                    example: 'Text or Image or File'
                },
                {
                    fieldname: 'file',
                    label: 'File',
                    fieldtype: 'Attach',
                    description: 'File attached with the message.',
                    example: 'https://example.com/file.pdf'
                },
                {
                    fieldname: 'message_reactions',
                    label: 'Message Reactions',
                    fieldtype: 'JSON',
                    description: 'Reactions on the message.',
                    example: `{
                        'unicode_string 1':{
                            'count': 1,
                            'users':['user1'],
                            'reaction': 'unicode_string 1'

                        },
                        'unicode_string 2':{
                            'count': 2,
                            'users':['user1', 'user2'],
                            'reaction': 'unicode_string 2'
                        }
                    }`
                },
                {
                    fieldname: 'is_reply',
                    label: 'Is Reply',
                    fieldtype: 'Check',
                    description: 'Whether the message is a reply to another message.',
                    example: '1 or 0'
                },
                {
                    fieldname: 'linked_message',
                    label: 'Linked Message',
                    fieldtype: 'Link',
                    description: 'ID of the message to which this message is a reply.',
                    example: 'message-id'
                },

                {
                    fieldname: 'content',
                    label: 'Content',
                    fieldtype: 'Long Text',
                    description: 'Content of the message in plain text.',
                    example: 'Hello, World!'
                },
                ...commonFields
            ]
        },
        {
            doctype: 'Raven Channel',
            events: ['Channel Created', 'Channel Deleted'],
            fields: [
                {
                    fieldname: 'channel_name',
                    label: 'Channel Name',
                    fieldtype: 'Data',
                    description: 'Name of the channel.',
                    example: 'general'
                },
                {
                    fieldname: 'channel_description',
                    label: 'Channel Description',
                    fieldtype: 'Data',
                    description: 'Description of the channel.',
                    example: 'General discussion'
                },
                {
                    fieldname: 'type',
                    label: 'Type',
                    fieldtype: 'Select',
                    description: 'Type of the channel.',
                    example: 'Public or Private or Open'
                },
                {
                    fieldname: 'is_direct_message',
                    label: 'Is Direct Message',
                    fieldtype: 'Check',
                    description: 'Whether the channel is a direct message channel.',
                    example: '1 or 0'
                },
                {
                    fieldname: 'is_self_message',
                    label: 'Is Self Message',
                    fieldtype: 'Check',
                    description: 'Whether the channel is a self message channel.',
                    example: '1 or 0'
                },
                {
                    fieldname: 'is_archived',
                    label: 'Is Archived',
                    fieldtype: 'Check',
                    description: 'Whether the channel is archived.',
                    example: '1 or 0'
                },
                ...commonFields

            ]
        },
        {
            'doctype': 'Raven Channel Member',
            events: ['Channel Member Added', 'Channel Member Deleted'],
            fields: [
                {
                    fieldname: 'channel_id',
                    label: 'Channel ID',
                    fieldtype: 'Link',
                    description: 'ID of the channel.',
                    example: 'general'
                },
                {
                    fieldname: 'user_id',
                    label: 'User ID',
                    fieldtype: 'Link',
                    description: 'ID of the user.',
                    example: 'user1'
                },
                {
                    fieldname: 'is_admin',
                    label: 'Is Admin',
                    fieldtype: 'Check',
                    description: 'Whether the user is an admin of the channel.',
                    example: '1 or 0'
                },
                {
                    fieldname: 'last_visit',
                    label: 'Last Visit',
                    fieldtype: 'Datetime',
                    description: 'Time when the user last visited the channel.',
                    example: '2021-08-12 12:00:00'
                },
                ...commonFields
            ]
        },
        {
            doctype: 'Raven User',
            events: ['Raven User Added', 'Raven User Deleted'],
            fields: [
                {
                    fieldname: 'user',
                    label: 'User',
                    fieldtype: 'Link',
                    description: 'User ID.',
                    example: 'user1'
                },
                {
                    fieldname: 'full_name',
                    label: 'Full Name',
                    fieldtype: 'Data',
                    description: 'Full name of the user.',
                    example: 'John Doe'
                },
                {
                    fieldname: 'first_name',
                    label: 'First Name',
                    fieldtype: 'Data',
                    description: 'First name of the user.',
                    example: 'John'
                },
                {
                    fieldname: 'user_image',
                    label: 'User Image',
                    fieldtype: 'Attach Image',
                    description: 'Image of the user.',
                    example: 'https://example.com/image.jpg'
                },
                {
                    fieldname: 'enabled',
                    label: 'Enabled',
                    fieldtype: 'Check',
                    description: 'Whether the user is enabled.',
                    example: '1 or 0'
                },
                ...commonFields
            ]
        },
        {
            doctype: 'Raven Message Reaction',
            events: ['Message Reaction'],
            fields: [
                {
                    fieldname: 'reaction',
                    label: 'Reaction',
                    fieldtype: 'Data',
                    description: 'Reaction emoji.',
                    example: '👍'
                },
                {
                    fieldname: 'reaction_escaped',
                    label: 'Reaction Escaped',
                    fieldtype: 'Data',
                    description: 'Escaped reaction emoji.',
                    example: '\\ud83d\\udc4d'
                },
                {
                    fieldname: 'message',
                    label: 'Message',
                    fieldtype: 'Link',
                    description: 'ID of the message.',
                    example: 'message-id'
                },
                ...commonFields
            ]
        }
    ]