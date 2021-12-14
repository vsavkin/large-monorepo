import { render } from '@testing-library/react';

import ImportantComponent28 from './important-component-28';

describe('ImportantComponent28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent28 />);
    expect(baseElement).toBeTruthy();
  });
});
