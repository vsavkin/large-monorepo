import { render } from '@testing-library/react';

import Icon66 from './icon66';

describe('Icon66', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon66 />);
    expect(baseElement).toBeTruthy();
  });
});
