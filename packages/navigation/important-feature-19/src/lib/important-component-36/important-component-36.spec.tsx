import { render } from '@testing-library/react';

import ImportantComponent36 from './important-component-36';

describe('ImportantComponent36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent36 />);
    expect(baseElement).toBeTruthy();
  });
});
