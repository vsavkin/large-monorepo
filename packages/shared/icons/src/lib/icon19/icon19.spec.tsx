import { render } from '@testing-library/react';

import Icon19 from './icon19';

describe('Icon19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon19 />);
    expect(baseElement).toBeTruthy();
  });
});
