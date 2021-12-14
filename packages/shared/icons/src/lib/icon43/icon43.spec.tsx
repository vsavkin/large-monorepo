import { render } from '@testing-library/react';

import Icon43 from './icon43';

describe('Icon43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon43 />);
    expect(baseElement).toBeTruthy();
  });
});
