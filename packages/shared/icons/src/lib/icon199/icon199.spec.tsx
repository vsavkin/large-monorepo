import { render } from '@testing-library/react';

import Icon199 from './icon199';

describe('Icon199', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon199 />);
    expect(baseElement).toBeTruthy();
  });
});
