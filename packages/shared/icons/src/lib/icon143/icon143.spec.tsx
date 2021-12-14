import { render } from '@testing-library/react';

import Icon143 from './icon143';

describe('Icon143', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon143 />);
    expect(baseElement).toBeTruthy();
  });
});
