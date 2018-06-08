export const get = state => {
    return id => {
        if (state.items.length === 0) {
            return undefined;
        }
        return state.items.find(item => item.id === id);
    }
};

export const getTeamMembers = state => state.items;

export const getInvitingStatus = state => state.inviting.status;
export const getChangingStatus = state => state.changing.status;

export const getInvitingTeam = state => state.inviting.team;
export const getChangingMember = state => state.changing.member;

export const isInviting = state => state.inviteMemberToTeamStatus === 'Request';
export const isChangingRole = state => state.changeMemberRoleStatus === 'Request';
export const isMemberLoading = state => state.loadMemberStatus === 'Request';
export const isMembersLoading = state => state.loadTeamMembersStatus === 'Request';