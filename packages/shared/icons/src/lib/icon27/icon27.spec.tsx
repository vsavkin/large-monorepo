import { render } from '@testing-library/react';

import Icon27 from './icon27';

describe('Icon27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon27 />);
    expect(baseElement).toBeTruthy();
  });
});
