import { render } from '@testing-library/react';

import ImportantComponent131 from './important-component-131';

describe('ImportantComponent131', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent131 />);
    expect(baseElement).toBeTruthy();
  });
});
