import { render } from '@testing-library/react';

import ImportantComponent64 from './important-component-64';

describe('ImportantComponent64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent64 />);
    expect(baseElement).toBeTruthy();
  });
});
