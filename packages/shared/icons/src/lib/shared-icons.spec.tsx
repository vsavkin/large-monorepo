import { render } from '@testing-library/react';

import SharedIcons from './shared-icons';

describe('SharedIcons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedIcons />);
    expect(baseElement).toBeTruthy();
  });
});
