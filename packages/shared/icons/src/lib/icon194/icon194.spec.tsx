import { render } from '@testing-library/react';

import Icon194 from './icon194';

describe('Icon194', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon194 />);
    expect(baseElement).toBeTruthy();
  });
});
