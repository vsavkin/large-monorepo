import { render } from '@testing-library/react';

import Icon190 from './icon190';

describe('Icon190', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon190 />);
    expect(baseElement).toBeTruthy();
  });
});
