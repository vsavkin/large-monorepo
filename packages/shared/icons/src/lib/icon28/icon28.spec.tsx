import { render } from '@testing-library/react';

import Icon28 from './icon28';

describe('Icon28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon28 />);
    expect(baseElement).toBeTruthy();
  });
});
