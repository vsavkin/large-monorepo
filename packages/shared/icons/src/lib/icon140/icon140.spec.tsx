import { render } from '@testing-library/react';

import Icon140 from './icon140';

describe('Icon140', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon140 />);
    expect(baseElement).toBeTruthy();
  });
});
