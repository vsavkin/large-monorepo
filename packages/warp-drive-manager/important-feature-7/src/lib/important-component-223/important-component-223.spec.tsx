import { render } from '@testing-library/react';

import ImportantComponent223 from './important-component-223';

describe('ImportantComponent223', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent223 />);
    expect(baseElement).toBeTruthy();
  });
});
