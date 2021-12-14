import { render } from '@testing-library/react';

import ImportantComponent238 from './important-component-238';

describe('ImportantComponent238', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent238 />);
    expect(baseElement).toBeTruthy();
  });
});
